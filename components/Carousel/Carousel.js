class Carousel {
    constructor(obj) {
        this.obj = obj;
        // console.log(this.obj);

        this.leftButton = obj.querySelector('.left-button');
        // console.log(this.leftButton);

        this.rightButton = obj.querySelector('.right-button');
        // console.log(this.rightButton);

        this.images = obj.querySelectorAll('img');
        // console.log(this.images);

        this.currentIndex = 0;
        // console.log(this.currentIndex);

        this.images[this.currentIndex].classList.add('display-flex');
        // console.log(this.currentIndex);

        this.leftButton.addEventListener('click', () => this.reduceIndex());
        this.rightButton.addEventListener('click', () => this.increaseIndex());
    }

    reduceIndex() {
        this.images.forEach((element) => {
            element.classList.add('display-none');
            element.classList.remove('display-flex');
            // console.log(element);
        })

        if(this.currentIndex == 0) {
            this.currentIndex = 3;
            this.images[this.currentIndex].classList.add('display-flex');
            // console.log(this.currentIndex);

        } else {
            this.currentIndex = this.currentIndex - 1;
            this.images[this.currentIndex].classList.add('display-flex');
            // console.log(this.currentIndex);
        }
    }

    increaseIndex() {
        this.images.forEach((element) => {
            element.classList.add('display-none');
            element.classList.remove('display-flex');
            // console.log(element);
        })

        if(this.currentIndex == 3) {
            this.currentIndex = 0;
            this.images[this.currentIndex].classList.add('display-flex');
            // console.log(this.currentIndex);
        } else {
            this.currentIndex = this.currentIndex + 1;
            this.images[this.currentIndex].classList.add('display-flex');
            // console.log(this.currentIndex);
        }
    }

}

let carousel = document.querySelector('.carousel');
// console.log(carousel);

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/