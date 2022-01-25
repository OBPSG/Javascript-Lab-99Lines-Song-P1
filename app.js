var friends = ["John", "Jane", "Mark", "Katie", "Smith"];

function Sing99LinesSong(singer) {
  for (let i = 99; i > 0; i--) {
    if (i == 1) {
      console.log(
          "Only 1 line of code in the file, only more line of code; " +
          singer +
          " strikes one out, clears it all out, no more lines of code in the file!"
      );
    }
    else if (i == 2) {
      console.log(
          "2 lines of code in the file, 2 lines of code; " +
          singer +
          " strikes one out, clears it all out, only one line of code in the file!"
      );
    } else {
        console.log(
            i +
            " lines of code in the file, " +
            i +
            " lines of code; " +
            singer +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " lines of code in the file!"
        );
    }
  }
}

//Sing99LinesSong("Andrew");
for(let i = 0; i < friends.length; i++)
{
  console.log(friends[i].toUpperCase() + ":");
  Sing99LinesSong(friends[i]);
}