var gators = [
    {name: "Elvis Vessley",
      hobbies: "surfing, dancing",
      weight: 865,
      likesIceCream: true,
      imgSource: "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/10c413dcc4d444acbd6810f483028933"
    },{name: "Little Britches",
      hobbies: "shaking, eating fruit",
      weight: 361,
      likesIceCream: true,
      imgSource: "http://nebula.wsimg.com/5df260927e75521ad0f18fae842e522e?AccessKeyId=00569247111AAAE64481&disposition=0&alloworigin=1"
    },{name: "Wanda Snapson",
      hobbies: "having parties",
      weight: 712,
      likesIceCream: false,
      imgSource: "http://www.vaguebuttrue.com/images/1449775760-alligatorclimbsfenceWEBSITE.jpg"
    }
  ]
var app = new Vue({
    el:'#app',
    data:{
      message:'Hello Vue',
      example:['one','two','three'],  
      example1:['monkey','cat','dog'],
      alligators: gators
    },  
    methods:{
        test:function(){
            console.log("test was called")
        },
        filter:function(){
            console.log("filter was called")
            // if check box is checked
            if(document.getElementById("icecream").checked){
               //set this. alligator to only likesIceCream === true 
            //    this.alligators = gators 
            console.log("true")
               this.alligators = gators.filter(gator => gator.likesIceCream);
                //        for(var i in gators){
                    
                //        //gators[i].likesIceCream = false;
                //        console.log(gators[i]);
                //    };
            }else{
              //else
              console.log("else")
               this.alligators = gators 
            //    for(var i in gators){
            //        console.log(gators[i]);
            //        gators[i].likesIceCream = true;
            //        console.log(gators[i]);
            //    }
            }  
           
        },
        sortAsc:function(){
            console.log("sort clicked");            
            this.alligators = gators.sort(function(a, b){return a.weight -b.weight});
            if(document.getElementById("icecream").checked){
                this.alligators = gators.filter(gator => gator.likesIceCream);               
              }
        },
        sortDesc:function(){
            console.log("sort clicked")           
           this.alligators = gators.sort(function(a, b){return b.weight - a.weight});
           if(document.getElementById("icecream").checked){
            this.alligators = gators.filter(gator => gator.likesIceCream);               
        }
        }
    }
  });