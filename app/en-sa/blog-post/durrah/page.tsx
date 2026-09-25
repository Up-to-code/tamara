import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-durrah-header.html';
import body from '@/components/exact/en-sa-blog-post-durrah-body.html';
import footer from '@/components/exact/en-sa-blog-post-durrah-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"69e721b01f5f009a85340fc8","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
