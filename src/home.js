export default function createHomePage() {
    const contentDiv = document.getElementById('content');

    // Create an image element
    const restaurantImage = document.createElement('img');
    restaurantImage.src = 'restaurant-image.jpg';
    contentDiv.appendChild(restaurantImage);

    // Create a headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Wonderful Restaurant!';
    contentDiv.appendChild(headline);

    // Create some copy about the restaurant
    const copy = document.createElement('p');
    copy.textContent = 'We are committed to providing the most delightful dining experience with our delicious dishes and excellent service. Come and join us!';
    contentDiv.appendChild(copy);
}