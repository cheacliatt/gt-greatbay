const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");

const questions = [
    {
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      name: "role",
      choices: ["POST", "BID"],
    },
  ];

  const init = () => {
    inquirer.prompt(questions).then();
  };

  init();