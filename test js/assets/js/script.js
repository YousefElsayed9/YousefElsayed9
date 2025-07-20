function looping(start , end, breakNum, continueNum){
    
    if(start&&end&&breakNum&&continueNum){

        for(var i= start ; i<=end ;i++)
            if(i== breakNum )
                break;
            else if (i==continueNum)
                continue;
            else
                console.log(i)

    }
    else{
        console.log("please enter all numbers")
    }
}

looping(1,10,8,3)

