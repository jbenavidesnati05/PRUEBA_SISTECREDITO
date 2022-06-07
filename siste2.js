 var monto = 10000;
 var nro_cuotas=10
 var tasa = 5;
 var x_cuota = 2;


 deuda = monto*(1+(tasa/100));
 vr_cuota = deuda/nro_cuotas; 

    for(i=1; i<=x_cuota;i++){

        vr_adeudado= deuda-vr_cuota;
        deuda = vr_adeudado;
    }
  


