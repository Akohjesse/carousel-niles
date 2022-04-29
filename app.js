window.onload = ()=>{
    var initial=0;
    Vue.createApp({
        data(){
            return {
                gsap,
                block: [1,2,3,4,5],
                canLeft: true,
                canRight: true
            }
        },
        // To stop the carousel after the limit is exceeded you can toggle the canLeft
        // and canRight values of the boolean, using relative units from the containerWidth and contect width using the .scrollerWidth and .length js method
        methods:{
           moveLeft(){
            initial = initial + 90;
            console.log(initial)
            gsap.to('.slider_container', {
                x: -(initial)
            })
           },
           moveRight(){
           initial = initial + 90;
              gsap.to('.slider_container', {
                  x: (initial)
              })
           },
           reset(e){
            initial = 0;
        }
        }
        
    }).mount('.container')
}