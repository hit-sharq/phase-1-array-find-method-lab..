// code your solution here
function superbowlWin(theory) {
    const winDetails=theory.find(item=>item["result"]==='W')
    if (winDetails) {
        return winDetails["year"]
    }else{
        return undefined
    }
}