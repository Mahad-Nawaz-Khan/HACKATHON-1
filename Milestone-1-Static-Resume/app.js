// List of toggle button IDs and their corresponding section IDs
var toggleButtonSections = [
    { buttonId: 'toggle-skills', sectionId: 'skills-section' },
    { buttonId: 'toggle-contact', sectionId: 'contact-section' },
    { buttonId: 'toggle-education', sectionId: 'education-section' },
    { buttonId: 'toggle-interests', sectionId: 'interests-section' },
    { buttonId: 'toggle-work', sectionId: 'work-experience-section' }
];
// Function to toggle visibility of a section
function toggleSection(buttonId, sectionId, affectsContactInfo) {
    if (affectsContactInfo === void 0) { affectsContactInfo = false; }
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (section && button) {
        // Set initial max-height and opacity for expanded sections
        section.style.maxHeight = section.scrollHeight + 'px';
        section.style.opacity = '1';
        button.addEventListener('click', function () {
            if (section.style.maxHeight !== '0px') {
                // Collapse the section
                section.style.maxHeight = '0px';
                section.style.opacity = '0';
            }
            else {
                // Expand the section
                section.style.maxHeight = section.scrollHeight + 'px';
                section.style.opacity = '1';
            }
        });
    }
}
// Initialize toggle functionality for all sections
toggleButtonSections.forEach(function (_a) {
    var buttonId = _a.buttonId, sectionId = _a.sectionId;
    toggleSection(buttonId, sectionId);
});
