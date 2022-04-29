// const express = require('express');
const bradleyController = {
    Index: (req, res) => {
        res.render("bradley/index", {title: "Bradley Easter Egg"} );
    }
}

module.exports = bradleyController;