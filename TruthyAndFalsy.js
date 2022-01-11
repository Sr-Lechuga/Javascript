//Truthy
Boolean(" ");//Los espacios cuentan
Boolean("a");
Boolean(1);//Cualquier numero menos el 0
Boolean([]);//Aunque el array este vacio
Boolean({});//Idem array
Boolean(function () {});

//Falsy
Boolean(0);
Boolean(null);
Boolean(NaN);
Boolean(undefined);
Boolean(false);
Boolean("");