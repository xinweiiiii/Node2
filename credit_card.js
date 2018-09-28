function validateCreditCard(number){
    number = number.replace(/-/g,"")
    console.log(number)
    console.log(number.length)
    // var res = str.replace(/blue/gi, "red");
    if (number.length !== 16)
    {
        var output;
        for (i = 0; i == 16; i += 1)
        {
            output = number[i];
            if (Integer.parseint(number[16-1]) % 2 != 0)
            {
                output += Integer.parseint(number[i])
            }
        }

        if (output > 16){
            return true
        }
    }

    return false;
}


console.log(validateCreditCard("9999-9999-8888-0000"))
