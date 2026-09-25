import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-business-account-header.html';
import body from '@/components/exact/ar-sa-business-account-body.html';
import footer from '@/components/exact/ar-sa-business-account-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"6a8d5699dc0b11b41e5ef546","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
