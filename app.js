function hideChapters(chapters) {
    chapters.forEach(element => {
        var x = document.getElementById(element);
        x.style.display = "none"
    });
}

function showChapter(index) {
    // Array of chapters
    const chapters = ["Beta", "Delta", "Iota"];
    const chapterInfo = ["Beta-Info", "Delta-Info", "Iota-Info"]

    // Chapter to be shown
    var chapter = document.getElementById(chapters[index]);
    var chapterInf = document.getElementById(chapterInfo[index]);

    // Hide all chapter divs
    hideChapters(chapters);
    hideChapters(chapterInfo);

    var overview = document.getElementById("Chapter-Overview");
    overview.style.display = "none";

    // Show desired chapter
    chapter.style.display = "block";
    chapterInf.style.display = "block";

}
