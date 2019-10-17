const takeOutGloves = (gloves, cb) => {
  console.log(`Ti takes out ${gloves}`);
  setTimeout(function(){
    cb(gloves)
  }, 1000); 
}

const putOnGloves = (gloves, cb) => {
  console.log(`Ti puts on ${gloves}`)
  const result = "gloved hands"
  setTimeout(function(){
    cb(result)
  }, 1000); 
}

const twistDoorHandle = (glovedHands, cb) => {
  console.log(`Ti twists door handle with ${glovedHands}`);
  const result = "open door";
  setTimeout(function(){
    cb(result);
  }, 1000); 
}

const walkIn = (openDoor, cb) => {
  console.log(`Ti walks in ${openDoor} and takes off gloves`);
  const result = "gloves"
  setTimeout(function(){
    cb(result);
  }, 1000);
}

const putAwayGloves = (gloves)  => {
  console.log(`Ti puts away ${gloves}`);
}

const openDoor = (gloves) => {
  takeOutGloves(gloves, (gloves) => {
    putOnGloves(gloves, (glovedHands) => {
      twistDoorHandle(glovedHands, (openDoor) =>{
        walkIn(openDoor, (gloves)=>{
          putAwayGloves(gloves);
        });
      });
    });
  });  
}

openDoor("white gloves");