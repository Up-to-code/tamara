import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-microless-header.html';
import body from '@/components/exact/en-sa-stores-microless-body.html';
import footer from '@/components/exact/en-sa-stores-microless-footer.html';
import inline from '@/components/exact/en-sa-stores-microless.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
