import React from "react";
import "./ani.css";

const UnderwaterAnimation: React.FC = () => {
  return (
    <body>
      <section>
        <div id="particles">
          <img src="https://th.bing.com/th/id/OIP.ZUBA19sgjf8YsKPS2oWG2gHaE6?w=242&h=180&c=7&r=0&o=5&pid=1.7" className="fish fish1" alt="error" />
          <img src="https://th.bing.com/th/id/OIP.TsiMvXvyYFL69lH9Tq4pmgHaEu?w=273&h=180&c=7&r=0&o=5&pid=1.7" className="fish fish2" alt="error" />
          <img src="https://pngtree.com/freepng/fresh-nile-tilapia-or-pla-nin-in-thai-freshwater-fish-isolated-with-clipping-path-in-png-file-format_13154499.html" className="fish fish3" alt="error" />
          <img src="./Ani-images/fish4.png" className="fish fish4" alt="error" />
          <img src="./Ani-images/fish5.png" className="fish fish5" alt="error" />
          <img src="./Ani-images/diver.png" className="diver" alt="error" />
        </div>
      </section>
      <script type="text/javascript" src="particles.js"></script>
      <script type="text/javascript" src="app.js"></script>
    </body>
  );
};

export default UnderwaterAnimation;
