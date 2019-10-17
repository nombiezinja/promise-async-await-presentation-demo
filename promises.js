const takeOutGloves = (gloves) => {
  return new Promise((resolve, reject) => {
    if (gloves) {
      console.log(`Ti takes out gloves`);
      resolve(gloves);
    } else {
      reject(new Error("Oh no -- don't have any gloves!"));
    }
  });
}

const putOnGloves = (gloves, cb) => {
  return new Promise((resolve, reject) => {
    if (gloves) {
      console.log(`Ti puts on gloves`);
      resolve("gloved hands");
    } else {
      reject(new Error("Oh no -- didn't put on gloves!"));
    }
  });
}

const twistDoorHandle = (glovedHands, cb) => {
  return new Promise((resolve, reject) => {
    if (glovedHands) {
      console.log(`Ti twists door handle with ${glovedHands}`);
      resolve("open door");
    } else {
      reject(new Error("Oh no -- hands weren't gloved!"));
    }
  });
}

const walkIn = (openDoor, cb) => {
  return new Promise((resolve, reject) => {
    if (openDoor) {
      console.log(`Ti walks in ${openDoor} and takes off gloves`);
      resolve("gloves");
    } else {
      reject(new Error("Oh no -- door wasn't open"));
    }
  });
}

const putAwayGloves = (gloves) => {
  return new Promise((resolve, reject) => {
    if (gloves) {
      console.log(`Ti puts away ${gloves}`);
      resolve();
    } else {
      reject(new Error("Oh gloves weren't put away!"));
    }
  });

}

const openDoor = (gloves) => {
  takeOutGloves(gloves).then((res) => {
    return putOnGloves();
  }).catch((err) => {
    console.log("Error:", err.message);
  }).then((res) => {
    return twistDoorHandle(res);
  }).catch((err) => {
    console.log("Error:", err.message);
  }).then((res) => {
    return walkIn(res);
  }).catch((err) => {
    console.log("Error:", err.message);
  }).then((res) => {
    return putAwayGloves(res);
  }).catch((err) => {
    console.log("Error:", err.message);
  })
}

openDoor("white gloves");