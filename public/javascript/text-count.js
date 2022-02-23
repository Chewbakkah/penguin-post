const postText = document.getElementById('post-content');
const countEle = document.getElementById('count');

postText.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    countEle.innerHTML = `${currentLength}/${maxLength}`;
});