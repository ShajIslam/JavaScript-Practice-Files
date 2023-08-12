function calcTicketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <=100){
        const first100Price = ticketQuantity * first100Rate;
        return first100Price;

    }
    else if(ticketQuantity <=200){
        const first100Price = first100Rate * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = restTicketPrice + first100Price;
        return totalPrice;

    }
    else{
        const first100Price = first100Rate * 100;
        const second100price = second100Rate * 100;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + second100price + restTicketPrice; 
        return totalPrice;

    }

}

let price = calcTicketPrice(220);
console.log(price);
