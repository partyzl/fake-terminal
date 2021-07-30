const err = require('./errors');


// stubs
function isValidFunction(f) {
  return true;
}

function isValidFlag(f) {
  return false;
}

function isValidPath(p) {
  return true;
}

const invalidFunctionError = Error('');
//


function evaluateExpression(exp)
{
  const tokens = exp.split(" ");
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

        flags.push(token);

      } else {

        throw(err.lsError.invalidFlagError);

      }

    } else {

      if (isValidPath(token)) {

        // default path is current directory
        if (path == '.') {

          path = token;

        } else {

          throw(err.lsError.multiplePathError);

        }

      } else {

        throw(err.lsError.invalidPathError);

      }

    }
  }

  return `${cmd} ${path}`;
}

module.exports = evaluateExpression;