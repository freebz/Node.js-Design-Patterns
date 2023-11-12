// 7-1 팩토리

// 7-1-1 객체 생성과 구현의 분리

function createImage (name) {
  return new Image(name)
}
const image = createImage('photo.jpeg')


const image = new Image(name)


function createImage (name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name)
  } else if (name.match(/\.gif$/)) {
    return new ImageGif(name)
  } else if (name.match(/\.png$/)) {
    return new ImagePng(name)
  } else {
    throw new Error('Unsupported format')
  }
}