const headGallery = document.getElementsByClassName('head-img-banner');
const btnLeftBan = document.getElementsByClassName('head-btn-banner-left')[0];
const btnRightBan = document.getElementsByClassName('head-btn-banner-right')[0];
const reviews = document.getElementsByClassName('review-text');
const btnLeftRev = document.getElementsByClassName('review-btn-left')[0];
const btnRightRev = document.getElementsByClassName('review-btn-right')[0];
let indexReview=0;
let index = 0;
headGallery[index].style.display = 'block';
reviews[indexReview].style.display='block';

moveRightGallery = ()=>{
    (index<headGallery.length-1) ? (headGallery[index].style.display='none', 
    headGallery[++index].style.display='block') :
    (headGallery[index].style.display='none',
    index = 0,
    headGallery[index].style.display='block');
    clearInterval(interval);

}

moveLeftGallery = ()=>{
    (index > 0) ? 
    (headGallery[index].style.display='none', 
    headGallery[--index].style.display='block') :
    (headGallery[index].style.display='none', 
    index = headGallery.length-1,
    headGallery[index].style.display='block');
    clearInterval(interval());
}

moveLeftReview = ()=> {
    indexReview>0 ? (reviews[indexReview].style.display = 'none',
    reviews[--indexReview].style.display = 'block') :
    (reviews[indexReview].style.display = 'none',
    indexReview = reviews.length-1,
    reviews[indexReview].style.display = 'block')  
}

moveRightReview = () => {
    indexReview<reviews.length-1 ? (reviews[indexReview].style.display = 'none',
    reviews[++indexReview].style.display='block') :
    (reviews[indexReview].style.display = 'none',
    indexReview=0, 
    reviews[indexReview].style.display= 'block')
}

const interval = () => setInterval (moveRightGallery,5000);
interval();
btnLeftBan.addEventListener('click', moveLeftGallery);
btnRightBan.addEventListener('click', moveRightGallery);
btnLeftRev.addEventListener('click', moveLeftReview);
btnRightRev.addEventListener('click', moveRightReview)

