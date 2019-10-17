const takeOutGloves = (gloves) => {
  console.log(`Ti takes out ${gloves}`);
  return gloves;
}

const putOnGloves = (gloves) => {
  console.log(`Ti puts on ${gloves}`);
  return "gloved hands";
}

const twistDoorHandle = (glovedHands) => {
  console.log(`Ti twists door handle with ${glovedHands}`);
  return "open door";
}

const walkInAndTakeGlovesOff = (openDoor) => {
  console.log(`Ti walks in ${openDoor} and takes off gloves`);
  return "gloves";
}

const putAwayGloves = (gloves)  => {
  console.log(`Ti puts away ${gloves}`);
  return "removed gloves";
}

const openDoor = async (arg) => {
  try {
    const gloves = await takeOutGloves(arg);
    const glovedHands = await putOnGloves(gloves);
    const openDoor = await twistDoorHandle(glovedHands);
    const removedGloves = await walkInAndTakeGlovesOff(openDoor);
  }catch(err){
    console.log("Error:",err.message);
  }
}

openDoor("white gloves");