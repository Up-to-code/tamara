import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-home-header.html';
import body from '@/components/exact/ar-sa-home-body.html';
import footer from '@/components/exact/ar-sa-home-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68a97f68a235e0cb8934e223","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
