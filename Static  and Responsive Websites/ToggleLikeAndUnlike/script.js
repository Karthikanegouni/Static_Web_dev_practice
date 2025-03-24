const img = document.getElementById("puppyImage");
const likeicon = document.getElementById("likeIcon");
const hearticon = document.getElementById("heartIcon");
const grinicon = document.getElementById("grinIcon");
let likeToggle = false;
let grinToggle = false;
let heartToggle = false;
const unToggleColor = "#cbd2d9";
const defaultImg =
  "https://c4.wallpaperflare.com/wallpaper/720/626/508/cute-dog-maltese-puppies-wallpaper-preview.jpg";

function resetIcons() {
  likeicon.style.color = unToggleColor;
  hearticon.style.color = unToggleColor;
  grinicon.style.color = unToggleColor;
  grinicon.style.backgroundColor = "transparent";
}

function onClickLikeButton() {
  resetIcons(); // Reset all icons before setting the active one
  if (likeToggle) {
    img.src = defaultImg;
    likeToggle = false;
  } else {
    img.src =
      "https://dogtime.com/wp-content/uploads/sites/12/2024/06/IMG_2366-e1719483022170.jpeg?w=1024";
    likeToggle = true;
    heartToggle = grinToggle = false;
    likeicon.style.color = "#0a66c2"; // Set color for the active icon
  }
}

function onClickHeartButton() {
  resetIcons(); // Reset all icons before setting the active one
  if (heartToggle) {
    img.src = defaultImg;
    heartToggle = false;
  } else {
    img.src =
      "https://www.rover.com/blog/wp-content/uploads/2020/06/Maltese-1024x683.jpeg";
    heartToggle = true;
    likeToggle = grinToggle = false;
    hearticon.style.color = "red"; // Set color for the active icon
  }
}

function onClickGrinButton() {
  resetIcons(); // Reset all icons before setting the active one
  if (grinToggle) {
    img.src = defaultImg;
    grinToggle = false;
  } else {
    img.src =
      "https://w0.peakpx.com/wallpaper/366/472/HD-wallpaper-maltese-dog-puppy-flowers-white-dog-cute-animals-pets-dogs-maltese.jpg";
    grinToggle = true;
    likeToggle = heartToggle = false;
    grinicon.style.color = "yellow"; // Set color for the active icon
    grinicon.style.backgroundColor = "lightpink"; // Set background color for the active icon
  }
}
