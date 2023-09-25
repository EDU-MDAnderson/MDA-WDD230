document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addChapterButton');
    const list = document.querySelector('#list');

    button.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';

            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus();
            });

            input.value = '';
        } else {
            // Provide a message or alert the user to enter a book and chapter.
            // You can use alert or some other method to communicate this to the user.
            // For example:
            alert('Please enter a book and chapter.');
            input.focus();
        }
    });
});
