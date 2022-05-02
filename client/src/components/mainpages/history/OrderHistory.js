import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./history.css";

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2 style={{ fontFamily: "Wellfleet"}}><u>Örökbefogadás</u></h2>
            <div className="elso-szoveg">
            <h3 style={{ fontFamily: "Wellfleet", color:"rgb(138, 69, 4)"}}>Amint egyszer megtudod, mi a szeretet, készen állsz arra, hogy adj; minél többet adsz, annál több lesz neked. Minél bőkezűbben halmozol el másokat, annál több szeretet tör fel a lényedben. /Osho/</h3>
            </div>
            <div className="masodik-szoveg">
            <h4 style={{ fontFamily: "Wellfleet"}}>Örökbefogadással kapcsolatos információk</h4>
            <div className='orokszoveg'><h2><u>Tisztelt Hölgyem, Uram! Kedves leendő gazdi!</u></h2>
            <p>Üdvözöljük a Fürge Lábak Állatmenhelyen, ahol a kóbor és a  leadott állatokból fogadhat örökbe.</p>

            <p>Örökbefogadási szándékát jelenleg e-mail-en tudja jelezni munkatársunknak az furgelabakallatmenhely@gmail.com e-mail címen. Kérjük, mielőtt jelentkezne, tekintse meg gazdára váró állatainkat.</p>

            <p>A e-mail beérkezése után mi fogjuk Önöket keresni, ez a jelentkezések és a feldolgozandó e-mailok számától függően az 1-2 naptól akár az egy hétig is eltarthatnak, türelmüket és megértésüket köszönjük!</p>

            <h3><u>Állat örökbefogadása a Fürge Lábak Állatmenhelyen</u></h3>

            <p>Örökbefogadás előtt kutyánál legalább 2 látogatást kérünk, macskánál egyet, amikor ismerkednek az örökbefogadni kívánt állattal, hazavinni a kutyát 3. alkalommal, macskát 2. alkalommal lehet. Ennek leforgási ideje minimum 3 nap, maximum 2 hét, amennyiben az adott állat egyénisége nem kíván hosszabb látogatási időt.</p>

            <p>2 hétnél tovább visszatartani semmilyen állatot nem áll módunkban, ezért kérjük, hogy jelentkezését csak utazás, költözés UTÁN adja be hozzánk!</p>

            <p>Mielőtt kimennénk a menhelyre, a honlapon nézzük meg és olvassuk el a nekünk tetsző kutya, macska jellemét, bekerülésének okát, körülményeit. </p>
            <p>
            Amennyiben talál a fotó és leírás alapján olyan állatot, aki felkeltette érdeklődését, akkor a menhely oldalán le is tudja foglalni, az ön által kiválasztott kiskedvencet.<b> Annak érdekében, hogy meggyőződjünk komoly szándékáról,  5000 forint értékben tudja lefoglalni az állatot előreutalással.  A teljes összeget az állat végleges örökbefogadásánál kell befizetnie, ami csak és kizárólag személyesen, a menhelyen történhet meg.</b>
            </p>

            <hr></hr>

            <p><b><u>A kutyák</u></b> az állatmenhelyen  a következő ellátásban részesülnek: 6 hónapos korig: külső- és belső parazitamentesítés, fertőző betegségek elleni védőoltások, mikrochip beültetés, 6 hónapos kor felett: külső- és belső parazitamentesítés, fertőző betegségek elleni védőoltások, mikrochip beültetés, ivartalanítás, dirofilaria-teszt.</p>

            <p>Azért, hogy a jövőben az állatmenhelyre kerülő állatok is hasonló ellátásban részesüljenek, a kutya esetében 10.000Ft felajánlásával járuljon hozzá a rendszer további működéséhez.</p>

            <p><b><u>A macskák</u> </b>az állatmenhelyen  a következő ellátásban részesülnek: 6 hónapos kor alatt: külső- és belső parazitamentesítés, legalább két, fertőző betegségek elleni védőoltás, mikrochip beültetés, 6 hónapos kor felett: külső- és belső parazitamentesítés, legalább két, fertőző betegségek elleni védőoltás, mikrochip beültetés, ivartalanítás, fertőző betegségekre (FeLV, FIV, FIP) vonatkozó szűrővizsgálatok.
            Azért, hogy a jövőben a menhelyünkre kerülő állatok is hasonló ellátásban részesüljenek, kérjük, hogy 10.000 Ft felajánlásával járuljon hozzá a rendszer további működéséhez. Kérjük, hogy a leendő gazdi az örökbefogadáskor hozzon magával cicahordozót, mert enélkül veszélyes az új családtag utaztatása.</p>

            <hr></hr>

            <p>A nem saját tulajdonú, illetve albérletben lakó gazdijelöltek esetében kiemelten kérjük, hogy a kinézett négylábú örökbefogadási szándékát többszörösen fontolják meg. Az albérletek többsége a kutya vagy macska életéhez képest rövid (általában 1 éves) időtartamra kerülnek megkötésre, váratlan felmondás esetén csak hetek állnak a lakók rendelkezésre, hogy az állat számára is megfelelő, új albérletet találjanak. Tapasztalataink szerint ez sokszor nem sikerül, ezért a korábban családi kedvencként tartott állat visszakerül a menhelyre.</p>

            <p>Hányattatott sorsú állataink számára a környezetváltozás esetenként nagy lelki megterhelést jelent, ez megnyilvánulhat a lakás amortizálásában, a többi lakótársat sokszor zavaró egész napos ugatásban vagy korábban nem tapasztalt viselkedési problémában. Amennyiben mindezekre felkészültek, és a felelős állattartás mellett döntöttek, kérjük, hogy az állatotthon által megadott hozzájárulási nyilatkozatot a főbérlő/tulajdonos által hitelesítve a rendelkezésünkre bocsájtani szíveskedjenek.</p>

            <p>Az egyeztetett időpontra kérjük CSAK családtagokkal érkezzen!! Barátokkal, szomszédokkal nem lehet jönni! Csak az állattal majd egy háztartásban élők jöhetnek az előre megbeszélt látogatásra! Ebben az esetben is egyszerre maximum 2-3 családtag. Hogy minden családtagnak legyen lehetősége megismerkedni a kiválasztott állattal, a második látogatás alkalmával tudnak azon családtagok jönni, akik az elsőnél nem voltak jelen. Kérjük az állatszigetre belépve viseljenek maszkot és lehetőség szerint kesztyűt is! A recepció területén EGYSZERRE MAXIMUM 2 FŐ tartózkodhat! Munkatársaink, állataink és saját maguk védelmében is kérjük önöket a fenti szabályok betartására! Bármilyen egyéb kérdése lenne, keressen minket a 06-30-648-5393-as telefonszámon vagy a furgelabakallatmenhely@gmail.com e-mail címen. Megértését köszönjük! </p>

            <hr></hr>

            <h3><u>AMIT JAVASLUNK MEGFONTOLNI ÉS ÁTGONDOLNI AZ ÖRÖKBEFOGADÁSI SZÁNDÉKKAL VALÓ FELKERESÉS ELŐTT:</u></h3>
            <p>Kérjük, a végleges döntés előtt mindenképpen alaposan gondolja át, biztosan készen áll e egy új társ érkezésére! Ugyan lehet, hogy a jelenlegi helyzet miatt több a szabadidő, azonban számos, a kutya számára fontos dolgok, korlátozottan elérhetőek. Nem lehet kutyaiskolába vinni és a fajtársaival való találkozás is nagyon korlátozott, ami azonban fontos része a megfelelő szocializációnak. A szeparációs szorongás könnyebben alakulhat ki, ha most minden időnket újdonsült kedvencükkel töltjük, majd hirtelen vissza kell térnünk a napi kerékvágásba, munka, iskola, egyéb elfoglaltságok. Már most fel kell tudni készülni erre az időszakra is. Amennyiben a fenti dolgokkal kapcsolatban kérdései merültek fel, forduljon hozzánk bizalommal. A kutyával való ismerkedésre és örökbefogadásra hétfőtől péntekig 08:00-16:00 között van lehetőség az állatmenhelyen (6726 Szeged, Thököly u. 44.) előre egyeztetett időpontban.</p>

            <p>Kedvencünk kiválasztása előtt picit magunkat is meg kell vizsgálni, a családunk összes tagjával át kell beszélni az örökbefogadást, mindenkinek akarni kell, mert a beilleszkedés sokkal könnyebb ebben az esetben a négylábúnak. Ne felejtsük el, bármilyen korú állatot viszünk haza időt kell adni, hisz nálunk is van aki hamarabb oldódik, gyorsabban alkalmazkodik, vagy épp jobb a probléma megoldó képessége van.</p>

            <p>Érdemes átgondolni,  hogy a családhoz milyen kedvenc lenne a legjobb társ. Aktív, játékos, pajkos, könnyen tanítható, vagy épp már kicsit nyugodtabb, kiegyensúlyozottabb, aki többet pihen, vagy épp akkor jön, megy mikor mi szeretnénk. Az utóbbi esetben érdemesebb már idősebb, nem kölyök vagy kamasz kutyát választani.</p>
            </div>
            </div>

            <h4 className="kedves">Kedves leendő gazdi!</h4>
            <p></p>
            <h4 style={{fontFamily: "Wellfleet"}}>Jelenleg {history.length} lefoglalt állata/támogatói kártyája van</h4>

            
            <table>
                <thead>
                    <tr>
                        <th style={{fontFamily: "Wellfleet"}}>Fizetési azonosító</th>
                        <th style={{fontFamily: "Wellfleet"}}>Vásárlás dátuma</th>
                        <th style={{fontFamily: "Wellfleet"}}>További információk</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.paymentID}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link style={{color:"white"}} to={`/history/${items._id}`}>Megtekintés</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
