document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector(".video");
    var appliedTimes = {}; // Track applied CSS changes

    video.addEventListener("timeupdate", function () {
        fetch("class-changes.json")
            .then(response => response.json())
            .then(classChanges => {
                // Group all changes by time to process them together
                var changesAtCurrentTime = classChanges.filter(change => video.currentTime >= change.time && !appliedTimes[change.time]);

                changesAtCurrentTime.forEach(change => {
                    var elements = document.querySelectorAll(change.target);

                    elements.forEach(element => {
                        // First, remove any classes if specified
                        if (change.remove) {
                            var removeClasses = Array.isArray(change.remove) ? change.remove : [change.remove];
                            removeClasses.forEach(cls => element.classList.remove(cls));
                        }
                    });

                    elements.forEach(element => {
                        // Then, add any classes if specified
                        if (change.add) {
                            var addClasses = Array.isArray(change.add) ? change.add : [change.add];
                            addClasses.forEach(cls => element.classList.add(cls));
                        }
                    });
                });

                // Mark timestamp as applied to prevent duplicates
                changesAtCurrentTime.forEach(change => {
                    appliedTimes[change.time] = true;
                });

            })
            .catch(error => console.error("Error loading class-changes.json:", error));
    });
});
