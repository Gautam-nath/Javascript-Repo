
//Class Assignment
class Vehicle {
   
    constructor(companyName, manufacturingyear,engineeNumber, ccType,  color) {
        this.companyName =companyName;
        this.manufacturingyear= manufacturingyear;
        this.engineeNumber =engineeNumber;
        this.ccType =ccType;
        this.color =color;
    }
    details(){
        console.log(`Company Name:${this.companyName},ManufacturingYear:${this.manufacturingyear}
                     Enginee Number:${this.engineeNumber},CC Type:${this.ccType},Color:${this.color}`);
    }
}
const SamirmotorsKdp = new Vehicle("Tata Motors","2025","abc234546tu","180","black");
console.log(SamirmotorsKdp);

//class college

class college {
    constructor(CollegeName,Location,ExtablishYear,Teachingstyle) {
        this.CollegeName=CollegeName;
        this.Location=Location;
        this.ExtablishYear=ExtablishYear;
        this.Teachingstyle=Teachingstyle;
    }
    details(){
        console.log(`College Name:${this.CollegeName},Location:${this.Location},Extablish Year:${this.ExtablishYear},Teaching Style:${this.Teachingstyle}`);
 
    }
}
const LNData = new college("Lokanath Mahavidyalaya","Patkura","1997","Very Excilent");
console.log(LNData);
