import Swal from "sweetalert2"

export async function ToastSuccess(message: string, status: any) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: status,
    title: message
  })
}

export async function AlertAddEmail(saveEmail: any) {
  const { value: email } = await Swal.fire({
    title: 'Endereço de email',
    input: 'email',
    inputPlaceholder: 'Digite seu email'
  })
  
  if (email) {
    const result = await saveEmail("users", {
      email: email,
    });
    if (result) ToastSuccess("Email cadastrado com sucesso!", "success");
    else ToastSuccess("Erro ao cadastrar email!", "error");
  }
}