window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => {
    MathJax.typesetPromise()
  })

  function mo(){
    document.getElementById("img").src="./imgs/Ziqi.jpg";
    }
    function mout(){
    document.getElementById("img").src="./imgs/Ziqi_sketch.png";
    }
  