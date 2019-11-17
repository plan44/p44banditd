/**
 * This file is part of the QCAD/CAM software.
 * Do NOT edit this file. Your changes will be lost when the software
 * is updated or reinstalled.
 * For details, please refer to the file README.txt in this directory.
 */

// Include definition of class GCodeBase:
include("GCodeBase.js");

// Constructor:
function GCodeBandit(cadDocumentInterface, camDocumentInterface) {
    GCodeBase.call(this, cadDocumentInterface, camDocumentInterface);

    this.decimals = 2;
    this.unit = RS.Millimeter;

    this.outputOffsetPath = true; // No G41/G42!

    // header / footer before / after output:
    this.header = [
      "[N]&G99", // BANDIT: Maschinennullpunkt anfahren
      "[N] [Z1][Y1][X1]G92", // set position register (Absoluten Nullpunkt setzen)
      "[N] G90" // absolute programming (G91 would be relative)
    ];
    this.footer = [
        "[N] M30"
    ];

    // header / footer before / after tool change:
    this.toolHeader = [
        "[N] M6" // Tool change (not automatic, no T value set)
    ];
    this.toolFooter = [];

}

// Configuration is derived from GCodeBase:
GCodeBandit.prototype = new GCodeBase();

// Display name shown in user interface:
GCodeBandit.displayName = "G-Code (BANDIT) [mm]";
