"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.lastname) {
    return { status: "error", message: "姓を入力してください" };
  }
  if (!rawFormData.firstname) {
    return { status: "error", message: "名を入力してください" };
  }
  if (!rawFormData.company) {
    return { status: "error", message: "会社名を入力してください" };
  }
  if (!rawFormData.email) {
    return { status: "error", message: "メールアドレスを入力してください" };
  }
  if (!validateEmail(rawFormData.email)) {
    return { status: "error", message: "メールアドレスの形式が誤っています" };
  }
  if (!rawFormData.message) {
    return { status: "error", message: "メッセージを入力してください" };
  }

  try {
    const result = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "lastname",
              value: rawFormData.lastname,
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: rawFormData.firstname,
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: rawFormData.company,
            },
            { objectTypeId: "0-1", name: "email", value: rawFormData.email },
            {
              objectTypeId: "0-1",
              name: "message",
              value: rawFormData.message,
            },
          ],
        }),
      }
    );

    if (!result.ok) {
      const errorText = await result.text();
      console.log(`Error Status: ${result.status}, Error Text: ${errorText}`);
      return {
        status: "error",
        message: `送信エラーが発生しました。ステータス: ${result.status}, 詳細: ${errorText}`,
      };
    }

    const responseData = await result.json();
    return { status: "success", message: "OK", data: responseData };
  } catch (e) {
    console.log("Fetch Error:", e);
    return {
      status: "error",
      message: `システムエラーが発生しました: ${
        e.message || "お問い合わせに失敗しました。"
      }`,
    };
  }
}
