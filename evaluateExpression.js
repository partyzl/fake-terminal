const err = require('./errors');


// stubs
function isValidFunction(f) {
  return true;
}

function isValidFlag(f) {
  return true;
}

function isValidPath(p) {
  return true;
}

const invalidFunctionError = Error('');
//


function evaluateExpression(exp)
{
  const tokens = exp.split(" ");
  //console.log(tokens);
  let cmd = undefined;
  let path = '.';
  let flags = [];

  if (!isValidFunction(tokens[0])) {
    throw(invalidFunctionError);
    return null;
  }

  cmd = tokens[0];

  if (tokens.length == 1) {
    return cmd;
  }

  tokens.shift();

  for (token of tokens) {

    if (token[0] == '-') {

      if (isValidFlag(token)) {

        flags.append(token);

      } else {

        //throw(err.lsError.invalidFlagError);
        console.log('invalidFlagError');

      }

    } else {

      if (isValidPath(token)) {

        // default path is current directory
        if (path == '.') {

          path = token;

        } else {

          //throw(err.lsError.multiplePathError);
          console.log('multiplePathError');

        }

      } else {

        //throw(err.lsError.invalidPathError);
          console.log('invalidPathError');

      }

    }
  }

  return `${cmd} ${path}`;
}

