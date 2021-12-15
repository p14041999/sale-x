import Swal from "sweetalert2";

export const switchChain = async ()=>{
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xf00' }],
        });
    }catch (switchError) {
        new Swal("Error","Can't switch chain can you switch chain manually to Rinkeby");
    }
}