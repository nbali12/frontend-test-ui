import React from 'react';
import Section from './Section'

import coffeeTable1 from '../Resources/Images/coffeeTable1.webp'
import coffeeTable2 from '../Resources/Images/coffeeTable2.webp'
import coffeeTable3 from '../Resources/Images/coffeeTable3.webp'
import coffeeTable4 from '../Resources/Images/coffeeTable4.webp'
import coffeeTable5 from '../Resources/Images/coffeeTable5.webp'
import mediaUnit1 from '../Resources/Images/mediaUnit1.webp'
import mediaUnit2 from '../Resources/Images/mediaUnit2.webp'
import mediaUnit3 from '../Resources/Images/mediaUnit3.webp'
import mediaUnit4 from '../Resources/Images/mediaUnit4.webp'
import mediaUnit5 from '../Resources/Images/mediaUnit5.webp'
import mediaUnit6 from '../Resources/Images/mediaUnit6.webp'
import mediaUnit7 from '../Resources/Images/mediaUnit7.webp'
import mediaUnit8 from '../Resources/Images/mediaUnit8.webp'
import mediaUnit9 from '../Resources/Images/mediaUnit9.webp'
import mediaUnit10 from '../Resources/Images/mediaUnit10.webp'
import mediaUnit11 from '../Resources/Images/mediaUnit11.webp'
import mediaUnit12 from '../Resources/Images/mediaUnit12.webp'
import mediaUnit13 from '../Resources/Images/mediaUnit13.webp'
import mediaUnit14 from '../Resources/Images/mediaUnit14.webp'
import sideTable1 from '../Resources/Images/sideTable1.webp'
import sideTable2 from '../Resources/Images/sideTable2.webp'
import sideTable3 from '../Resources/Images/sideTable3.webp'
import sideTable4 from '../Resources/Images/sideTable4.webp'
import sideTable5 from '../Resources/Images/sideTable5.webp'
import tableSet1 from '../Resources/Images/tableSet1.webp'
import tableSet2 from '../Resources/Images/tableSet2.webp'
import tableSet3 from '../Resources/Images/tableSet3.webp'
import tableSet4 from '../Resources/Images/tableSet4.webp'


const Content = () => {
    const coffeeTables = [coffeeTable1, coffeeTable2, coffeeTable3, coffeeTable4, coffeeTable5 ]
    const mediaUnits = [ mediaUnit1, mediaUnit2, mediaUnit3, mediaUnit4, mediaUnit5,
                          mediaUnit6, mediaUnit7, mediaUnit8, mediaUnit9, mediaUnit10,
                          mediaUnit11, mediaUnit12, mediaUnit13, mediaUnit14 ]
    const sideTables = [sideTable1, sideTable2, sideTable3, sideTable4, sideTable5 ]
    const tableSets = [tableSet1, tableSet2, tableSet3, tableSet4 ]
  
  return (
    <div className="content">
      <section >
        <h1 id="CoffeeTables" className='title'>Coffee Tables</h1>
        <Section data={coffeeTables} />
      </section>
      <section  >
        <h2 id="SideTables" className='title'>Side Tables</h2>
        <Section data={mediaUnits} />
      </section>
      <section  >
        <h2 id="MediaUnits" className='title'>Media Units</h2>
        <Section data={sideTables} />
      </section>
      <section  >
        <h2 id="TableSets" className='title'>Table Sets</h2>
        <Section data={tableSets} />
      </section>
    </div>
  );
};

export default Content;
