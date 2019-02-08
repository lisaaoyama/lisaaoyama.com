$(function() {
  $(".cross, .mobile-menu").hide();
  $( ".hamburger" ).click(function() {
    $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".mobile-menu" ).animate({width: 'toggle'}, 300, function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
  });
});


const INDEX_HTML = '<div class="index-image image-wrapper"></div>'
const WORKS_HTML = `<a href="./work_1_dive.html"><div class="work-container" id="dive">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>The Dive</h2>
    </div> -->
    <div class="work-descr-container">
      <p>Bubbles to induce meditation</p>
    </div>
  </div>
</div></a>
<a href="./work_2_jimmio.html"><div class="work-container" id="jimmio">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Jimmio</h2>
    </div> -->
    <div class="work-descr-container">
      <p>A new identity for Japanese English</p>
    </div>
  </div>
</div></a>
<a href="./work_3_fetop.html"><div class="work-container" id="fetop">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Fetop</h2>
    </div> -->
    <div class="work-descr-container">
      <p>Plastic roof tiles for slum housing</p>
    </div>
  </div>
</div></a>
<a href="./work_4_bubbleway.html"><div class="work-container" id="bubbleway">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Bubbleway</h2>
    </div> -->
    <div class="work-descr-container">
      <p>Playable sculptures of dialogues</p>
    </div>
  </div>
</div></a>
<a href="./work_5_gradworkc.html"><div class="work-container" id="gradworkc">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Graduation Works Catalogue</h2>
    </div> -->
    <div class="work-descr-container">
      <p>Catalogue for 2018 grad works exhibit</p>
    </div>
  </div>
</div></a>
<a href="./work_6_study.html"><div class="work-container" id="study">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Study for Daydreamers</h2>
    </div> -->
    <div class="work-descr-container">
      <p>Experiment with bubbles</p>
    </div>
  </div>
</div></a>
<a href="./work_7_time.html"><div class="work-container" id="time">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Time Doesn't Fly</h2>
    </div> -->
    <div class="work-descr-container">
      <p>A reminder of life stories</p>
    </div>
  </div>
</div></a>
<a href="./work_8_conservatory.html"><div class="work-container" id="conservatory">
  <div class="work-container-overlay">
    <!-- <div class="work-title-container">
      <h2>Conservatory for Daydreamers</h2>
    </div> -->
    <div class="work-descr-container">
      <p>A mobile room for daydreaming</p>
    </div>
  </div>
</div>
`
const ABOUT_HTML = `
<div class="about-container">
<p>Born Japanese, I lived in the UK for six years during my childhood. Having been deeply influenced by the Design Museum in London I used to love visiting, I now study design at Tokyo University of the Arts. This website shows the works I produced during my time at university.</p>
</div>`


const PAGE_MAP = {
  '/': INDEX_HTML,
  '/works': WORKS_HTML,
  '/about': ABOUT_HTML
}

function transitPage(pathname) {
  const page = $('#page')
  page.addClass('hidden out').removeClass('in')

  const newHTML = PAGE_MAP[pathname]
  history.pushState({}, '', pathname)

  setTimeout(function() {
    page.html(newHTML)
    page.removeClass('hidden out').addClass('in')
  }, 1000)
}

$('a').on('click', function(e) {
  const pathname = $(this).prop('pathname')
  transitPage(pathname)
  return false
})

$(document).ready(function() {
  $('#page').removeClass('hidden').addClass('in')
})