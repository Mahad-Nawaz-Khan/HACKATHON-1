// Define an interface for toggle buttons and their corresponding sections
interface ToggleButtonSection {
    buttonId: string;
    sectionId: string;
  }
  
  // List of toggle button IDs and their corresponding section IDs
  const toggleButtonSections: ToggleButtonSection[] = [
    { buttonId: 'toggle-skills', sectionId: 'skills-section' },
    { buttonId: 'toggle-contact', sectionId: 'contact-section' },
    { buttonId: 'toggle-education', sectionId: 'education-section' },
    { buttonId: 'toggle-interests', sectionId: 'interests-section' },
    { buttonId: 'toggle-work', sectionId: 'work-experience-section' }
  ];
  
  // Function to toggle visibility of a section
  function toggleSection(buttonId: string, sectionId: string, affectsContactInfo = false): void {
    const button = document.getElementById(buttonId) as HTMLButtonElement;
    const section = document.getElementById(sectionId) as HTMLElement;
  
    if (section && button) {
      // Set initial max-height and opacity for expanded sections
      section.style.maxHeight = section.scrollHeight + 'px';
      section.style.opacity = '1';
  
      button.addEventListener('click', () => {
        if (section.style.maxHeight !== '0px') {
          // Collapse the section
          section.style.maxHeight = '0px';
          section.style.opacity = '0';
  
        } else {
          // Expand the section
          section.style.maxHeight = section.scrollHeight + 'px';
          section.style.opacity = '1';

        }
      });
    }
  }
  
  // Initialize toggle functionality for all sections
  toggleButtonSections.forEach(({ buttonId, sectionId }) => {
    toggleSection(buttonId, sectionId);
  });
  