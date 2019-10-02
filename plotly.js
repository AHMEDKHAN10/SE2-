var dataab = [];
            function getData() {
                //return Math.random();
                //const textviewcount = document.getElementById('viewcount');
                fetch('https://nowexpress-pn3pr5jm1.now.sh/users')
                .then(response => response.json()).then(data =>{
                    console.log(data);
                    for(var i =0; i<data.length;i++){
                        dataab.push(parseInt(data[i].Temperature));

                
                }

                


                     Plotly.plot('chart',[{
                     y: dataab,
                    type:'line'
                 }]);
                    //console.log(dataab);
                    
                })
                .catch(function(error){
                    console.log(error);
                });
            }  
            //document.addEventListener('DOMcontentLoaded', function(){
               // getData();
            //});

            
           
            
            var cnt = 0;
            setInterval(function(){
                Plotly.extendTraces('chart',{ y:[[(getData())]]}, [0]);
                cnt++;
                if(cnt > 500) {
                    Plotly.relayout('chart',{
                        xaxis: {
                            range: [cnt-500,cnt]
                        }
                    });
                }
            },500);