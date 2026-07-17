import './style.css'

const sailRows = [
  ['Standard Main', '1,434 records', 100, 'blue'],
  ['Full Roach Main', '22 records', 5, 'blue'],
]

const spinRows = [
  ['S2', '682 records', 72],
  ['S1.5', '260 records', 24],
  ['S1', '201 records', 17],
  ['S3', '136 records', 12],
  ['A3', '116 records', 8],
]

const headRows = [
  ['J2', '473 records', 25],
  ['G1', '446 records', 24],
  ['J1', '222 records', 12],
  ['J3', '204 records', 11],
  ['G2', '112 records', 7],
]

const dimensions = [
  ['P', 'Mainsail Hoist', '14.79 m'],
  ['E', 'Mainsail Foot', '5.38 m'],
  ['I', 'Foretriangle Height', '15.67 m'],
  ['J', 'Foretriangle Base', '4.41 m'],
  ['ISP', 'Spinnaker Hoist', '15.92 m'],
  ['SPL', 'Spinnaker Pole', '4.43 m'],
  ['BAS', 'Boom Above Sheer', '1.71 m'],
]

function barRows(rows, color = 'orange') {
  return rows.map(([name, count, value, customColor]) => `
    <div class="bar-row">
      <div class="bar-label"><span>${name}</span><small>${count}</small></div>
      <div class="track"><span class="bar ${customColor || color}" style="width:${value}%"></span></div>
    </div>`).join('')
}

function rigDiagram() {
  return `
    <svg class="rig-svg" viewBox="0 0 470 545" role="img" aria-label="Sailboat rig dimension diagram">
      <defs><pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(116,137,176,.16)" stroke-width="1"/></pattern><marker id="arrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dce8f9"/></marker></defs>
      <rect x="10" y="10" width="450" height="525" rx="14" fill="url(#grid)"/>
      <path d="M57 465 L230 39 L237 465" class="sail outline"/><path d="M237 43 L403 465" class="sail outline"/><path d="M236 44 L265 464" class="dashed"/>
      <path d="M232 25 L232 468" class="mast"/><path d="M222 24 L238 24 L238 39 L222 39 Z" class="mast"/>
      <path d="M55 465 L405 465 Q402 490 370 494 L76 494 Z" class="hull"/>
      <line x1="197" y1="45" x2="197" y2="461" class="measure"/><line x1="193" y1="45" x2="201" y2="45" class="measure"/><line x1="193" y1="461" x2="201" y2="461" class="measure"/>
      <line x1="266" y1="69" x2="266" y2="462" class="measure"/><line x1="262" y1="69" x2="270" y2="69" class="measure"/><line x1="262" y1="462" x2="270" y2="462" class="measure"/>
      <line x1="406" y1="62" x2="406" y2="463" class="measure"/><line x1="402" y1="62" x2="410" y2="62" class="measure"/><line x1="402" y1="463" x2="410" y2="463" class="measure"/>
      <line x1="79" y1="445" x2="231" y2="445" class="measure"/><line x1="240" y1="476" x2="378" y2="476" class="measure"/><line x1="239" y1="437" x2="378" y2="437" class="measure"/>
      <text x="134" y="431" class="measure-text white">E 5.38</text><text x="146" y="278" class="measure-text blue-t">P 14.79</text><text x="247" y="313" class="measure-text green-t">I 15.67</text><text x="325" y="319" class="measure-text purple-t">ISP 15.92</text><text x="286" y="465" class="measure-text green-t">J 4.41</text><text x="286" y="424" class="measure-text purple-t">SPL 4.43</text><text x="167" y="486" class="measure-text white small-t">LOA 11.93</text>
    </svg>`
}

document.querySelector('#app').innerHTML = `
  <aside class="sidebar">
    <a class="brand" href="#"><span>Harbor</span><b>IQ</b></a>
    <nav aria-label="Main navigation">
      <a href="#"><i>⌘</i>Overview</a><a class="active" href="#boats"><i>⌑</i>Boats</a><a href="#"><i>▤</i>Proposals</a><a href="#"><i>◇</i>Designs</a><a href="#"><i>⬡</i>Orders</a>
    </nav>
  </aside>
  <main class="main-content">
    <header class="topbar"><button class="menu-button" aria-label="Toggle navigation">☰</button><div class="top-actions"><button>?</button><button>♧</button><button class="profile">aaron⌄</button></div></header>
    <section class="page">
      <div class="intro"><a class="back" href="#boats">←&nbsp; Back to Library</a><div class="title-row"><div><h1>FIRST 40.7 <span>01/2008</span></h1><div class="pills"><span>▣&nbsp; 1118 hulls</span><span>⊖&nbsp; 5,168 sail records</span></div></div><button class="primary">▧&nbsp; Start a Proposal</button></div></div>
      <div class="dashboard-grid">
        <section class="card analytics"><div class="card-title">▥ <h2>Class Sail Analytics</h2></div><p class="card-copy">Most popular sail configurations found on sisterships.</p><div class="analytics-columns"><div><h3>◱ &nbsp;Mainsail Selection</h3>${barRows(sailRows)}<h3 class="section-title">♠ &nbsp;Spinnaker Choice</h3>${barRows(spinRows)}</div><div><h3>◢ &nbsp;Headsail Preference</h3>${barRows(headRows, 'green')}</div></div></section>
        <div class="right-column"><section class="card rig"><div class="card-title anchor">⚓ <h2>Rig Diagram</h2></div><div class="diagram">${rigDiagram()}</div></section><section class="card dimensions"><div class="card-title"><h2>Rig Dimensions</h2></div><p class="card-copy">Verify these against client's actual measurements</p><div class="dimension-list">${dimensions.map(([abbr,label,value]) => `<div><b>${abbr}</b><span>${label}</span><strong>${value}</strong></div>`).join('')}</div><h3 class="hull-title">Hull Dimensions</h3><div class="dimension-list"><div><b>LOA</b><span>Length Overall</span><strong>11.93 m</strong></div></div></section></div>
      </div>
      <aside class="notice"><b>Note:</b> Rig dimensions shown are from the database and should be used for proposal estimation only. Final measurements must be taken on-site before production.</aside>
    </section>
  </main>`
