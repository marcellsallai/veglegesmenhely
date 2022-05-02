import React from 'react';
import "./contact.css";

function Contact() {
  return (
    <>
        <h1></h1>
        <h3 className='nyitva'>Nyitvatartás az alábbi időpontokban:</h3>
        <h4>

            <table className='table'>
        <tr>
            <th>Hétfő</th>
            <th>Kedd</th>
            <th>Szerda</th>
            <th>Csütörtök</th>
            <th>Péntek</th>
            <th>Szombat</th>
            <th>Vasárnap</th>
        </tr>

        <tr>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>8:00-16:00</td>
            <td>Zárva!</td>
            <td>Zárva!</td>
        </tr>
    </table>
    </h4>
    <div className='adatok'>
    <h4 style={{fontFamily: "Wellfleet"}}>További elérhetőségek:</h4>
    <h4 style={{fontFamily: "Wellfleet"}}>Cím:Thököly u. 44 Szeged 6726</h4>
    <h4 style={{fontFamily: "Wellfleet"}}>Tel:06306485393</h4>
    <h4 style={{fontFamily: "Wellfleet"}}>Email:furgelabakallatmenhely@gmail.com</h4>
    <h4 style={{fontFamily: "Wellfleet"}}>Facebook oldalunk:<a className='link' href="https://www.facebook.com/F%C3%BCrge-L%C3%A1bak-%C3%81llatmenhely-101968349148902">Fürge Lábak Állatmenhely</a></h4>
    </div>


    </>
  );
}

export default Contact;