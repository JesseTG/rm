const io = require('@actions/io');
const core = require('@actions/core');

const path = core.getInput('path', {
  required: true
});

io.rmRF(path)
    .catch((error) => {
      core.setFailed(error.message);
    })
;
