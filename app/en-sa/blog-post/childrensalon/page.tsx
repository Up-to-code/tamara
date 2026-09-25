import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-childrensalon-header.html';
import body from '@/components/exact/en-sa-blog-post-childrensalon-body.html';
import footer from '@/components/exact/en-sa-blog-post-childrensalon-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"691d710cf07247f18b6c2c5b","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
