import Cart from "../Models/addTooCart.js";
export const addToCart = async (req, res)=>{
  const{productId} = req.body;

  try {
    let cart = await Cart.findOne({
      user: req.userId,
    });
    if(!cart){
      cart = new Cart({
        user:req.userId,
        items:[],
      });
    }
    const existingItems = cart.items.find(
      (item) => item.product.toString() === productId,
    );
    if (existingItems){
      existingItems.quantity += 1;

    }else{
      cart.items.push({
        product:productId,
        quantity:1,
      });
    }

    await cart.save();

    res.json({
      message: "product added to cart",
      cart,
    })
  }catch(err){
    res.status(500).json({
      message: err.message,
    });
  }

}

export const getCart = async(req, res)=>{
  const cart = await Cart.findOne({
    user: req.userId,
  }).populate("items.product");
  res.json(cart);
}


export const removeFromCart = async(req, res) =>{
  const {productId} =req.params;
  const cart = await Cart.findOne({
    user: req.userId,
  })
  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId,
  );

  await cart.save();
  res.json({
    message: "removed",
  })
}