import React ,{useState}from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/madamBoutiqueSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const availableSizes = ['S', 'M', 'L'];
  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleBuyNow = () => {
    if (selectedSize) {
      // Thực hiện hành động mua sản phẩm với size được chọn
      console.log(`Mua sản phẩm với size: ${selectedSize}`);
    } else {
      // Hiển thị thông báo lỗi nếu người dùng chưa chọn size
      alert('Vui lòng chọn size sản phẩm.');
    }
    
  };
  const [selectedColor, setSelectedColor] = useState('#FF5733');

  const colorOptions = ['#FF5733', '#3498db', '#2ecc71']; // Thêm màu sắc nếu cần

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>

      <div>
      <h2>Chọn Màu Sản Phẩm</h2>

      <div style={{ display: 'flex' }}>
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{
              backgroundColor: color,
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              margin: '5px',
              cursor: 'pointer',
              border: selectedColor === color ? '2px solid #000' : '2px solid #fff',
            }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
      </div>

      <div id="selected-color">Màu đã chọn: <span id="selected-color-value">{selectedColor}</span></div>
    </div>
      <div>
        <label>Chọn Size:</label>
        <select
          value={selectedSize}
          onChange={(e) => handleSizeChange(e.target.value)}
        >
          <option value="" disabled>
            Chọn Size
          </option>
          {availableSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
