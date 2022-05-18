module.exports = class HttpResponse {
  static ok (result){
    return {
      statusCode: 200,
      result
    }
  }

  static badRequest(error) {
    return {
      statusCode: 400,
      result: {
        error: error.message
      }
    }
  }

  static serverError(error) {
    return {
      statusCode: 500,
      result: {
        error
      }
    }
  }
}
