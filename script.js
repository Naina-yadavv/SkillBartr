document.addEventListener('DOMContentLoaded', () => {
    // Profile Creation - Add Skill Fields
    const addSkillHave = document.getElementById('addSkillHave');
    const addSkillSeek = document.getElementById('addSkillSeek');
    const skillsHaveContainer = document.getElementById('skillsHave');
    const skillsSeekContainer = document.getElementById('skillsSeek');

    if (addSkillHave) {
        addSkillHave.addEventListener('click', () => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'flex space-x-2';
            skillDiv.innerHTML = `
                <input type="text" class="skill-input w-full p-3 border rounded-lg" placeholder="Skill (e.g., Python)">
                <select class="skill-level p-3 border rounded-lg">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            `;
            skillsHaveContainer.appendChild(skillDiv);
        });
    }

    if (addSkillSeek) {
        addSkillSeek.addEventListener('click', () => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'flex space-x-2';
            skillDiv.innerHTML = `
                <input type="text" class="skill-input w-full p-3 border rounded-lg" placeholder="Skill (e.g., Graphic Design)">
                <select class="skill-level p-3 border rounded-lg">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            `;
            skillsSeekContainer.appendChild(skillDiv);
        });
    }

    // Profile Submission
    const submitProfile = document.getElementById('submitProfile');
    if (submitProfile) {
        submitProfile.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const college = document.getElementById('college').value;
            const email = document.getElementById('email').value;
            const bio = document.getElementById('bio').value;
            const skillsHave = Array.from(document.querySelectorAll('#skillsHave .skill-input')).map((input, i) => ({
                skill: input.value,
                level: document.querySelectorAll('#skillsHave .skill-level')[i].value
            }));
            const skillsSeek = Array.from(document.querySelectorAll('#skillsSeek .skill-input')).map((input, i) => ({
                skill: input.value,
                level: document.querySelectorAll('#skillsSeek .skill-level')[i].value
            }));
            const profilePic = document.getElementById('profilePic').files[0];

            // Simulate saving profile
            console.log({ name, college, email, skillsHave, skillsSeek, bio, profilePic });
            alert('Profile created successfully!');
            window.location.href = 'profile-view.html';
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            // Simulated search results
            const results = [
                { name: 'Alex Carter', college: 'NYU', skill: 'Python' },
                { name: 'Sam Lee', college: 'UCLA', skill: 'UI/UX Design' }
            ].filter(item => 
                item.name.toLowerCase().includes(query) ||
                item.college.toLowerCase().includes(query) ||
                item.skill.toLowerCase().includes(query)
            );

            searchResults.innerHTML = results.map(item => `
                <div onclick="window.location.href='profile-view.html'">
                    ${item.name} - ${item.college} - ${item.skill}
                </div>
            `).join('');
        });
    }

    // Profile Edit
    const editProfile = document.getElementById('editProfile');
    if (editProfile) {
        editProfile.addEventListener('click', () => {
            window.location.href = 'profile-creation.html';
        });
    }

    // Send Request
    const sendRequest = document.getElementById('sendRequest');
    if (sendRequest) {
        sendRequest.addEventListener('click', () => {
            const requestSkill = document.getElementById('requestSkill').value;
            const offerSkill = document.getElementById('offerSkill').value;
            // Simulate sending request
            alert(`Requested ${requestSkill} in exchange for ${offerSkill}`);
        });
    }
});
