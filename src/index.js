module.exports = function toReadable (number) 
{
    let units = number % 10
    number -= units
    number /= 10
    let dozens = number % 10
    number -= dozens
    number /= 10
    let hundreds = number % 10
    number -= hundreds
    number /= 10
    if(units == 0 && dozens == 0 && hundreds == 0) return 'zero'

    let stringnumber = ''
   
    let unitstring = ''
    let dozenstring = ''
    
    switch (units) 
    {
        case 1:
            stringnumber += 'one'
            break;
        case 2:
            stringnumber += 'two'
            break;
        case 3:
            stringnumber += 'three'
            break;
        case 4:
            stringnumber += 'four'
            break;
        case 5:
            stringnumber += 'five'
            break;
        case 6:
            stringnumber += 'six'
            break;
        case 7:
            stringnumber += 'seven'
            break;
        case 8:
            stringnumber += 'eight'
            break;
        case 9:
            stringnumber += 'nine'
            break;
        default:
        break;
    }

    if(dozens == 0 && hundreds == 0) return stringnumber;
    
    switch (dozens) {
        case 1:
            if(units == 0)stringnumber = 'ten'
            if(units == 1)stringnumber = 'eleven'
            if(units == 2)stringnumber = 'twelve'
            if(units == 3)stringnumber = 'thirteen'
            if(units == 4)stringnumber = 'fourteen'
            if(units == 5)stringnumber = 'fifteen'
            if(units == 6)stringnumber = 'sixteen'
            if(units == 7)stringnumber = 'seventeen'
            if(units == 8)stringnumber = 'eighteen'
            if(units == 9)stringnumber = 'nineteen'
        break;
        case 2:
            if(units == 0)stringnumber = 'twenty'
            else stringnumber = `twenty ${stringnumber}`
        break;
        case 3:
            if(units == 0)stringnumber = 'thirty'
            else stringnumber = `thirty ${stringnumber}`
        break;
        case 4:
            if(units == 0)stringnumber = 'forty'
            else stringnumber = `forty ${stringnumber}`
        break;
        case 5:
            if(units == 0)stringnumber = 'fifty'
            else stringnumber = `fifty ${stringnumber}`
        break;
        case 6:
            if(units == 0)stringnumber = 'sixty'
            else stringnumber = `sixty ${stringnumber}`
        break;
        case 7:
            if(units == 0)stringnumber = 'seventy'
            else stringnumber = `seventy ${stringnumber}`
        break;
        case 8:
            if(units == 0)stringnumber = 'eighty'
            else stringnumber = `eighty ${stringnumber}`
        break;
        case 9:
            if(units == 0)stringnumber = 'ninety'
            else stringnumber = `ninety ${stringnumber}`
        break;
        default:
        break;
    }

    if(hundreds == 0) return stringnumber

    switch (hundreds) 
    {
        case 1:
            if(units == 0 && dozens == 0)stringnumber = 'one hundred'
            else stringnumber = `one hundred ${stringnumber}`           
            break;
        case 2:
            if(units == 0 && dozens == 0)stringnumber = 'two hundred'
            else stringnumber = `two hundred ${stringnumber}`           
            break;
        case 3:
            if(units == 0 && dozens == 0)stringnumber = 'three hundred'
            else stringnumber = `three hundred ${stringnumber}`
            break;
        case 4:
            if(units == 0 && dozens == 0)stringnumber = 'four hundred'
            else stringnumber = `four hundred ${stringnumber}`            
            break;
        case 5:
            if(units == 0 && dozens == 0)stringnumber = 'five hundred'
            else stringnumber = `five hundred ${stringnumber}`            
            break;
        case 6:
            if(units == 0 && dozens == 0)stringnumber = 'six hundred'
            else stringnumber = `six hundred ${stringnumber}`           
            break;
        case 7:
            if(units == 0 && dozens == 0)stringnumber = 'seven hundred'
            else stringnumber = `seven hundred ${stringnumber}`
            break;
        case 8:
            if(units == 0 && dozens == 0)stringnumber = 'eight hundred'
            else stringnumber = `eight hundred ${stringnumber}`
            break;
        case 9:
            if(units == 0 && dozens == 0)stringnumber = 'nine hundred'
            else stringnumber = `nine hundred ${stringnumber}`            
            break;
        default:
        break;
    }

    return stringnumber;
}
