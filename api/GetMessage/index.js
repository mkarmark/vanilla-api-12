module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: { text: JSON.stringify(process.env) },
  };
};
